# 1) Build
FROM node:20-alpine AS build
WORKDIR /app

# Build args para Supabase (configure no EasyPanel)
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_SUPABASE_ANON_KEY=$VITE_SUPABASE_ANON_KEY

# Base path / para domínio raiz (adesaopro.com.br)
ENV VITE_BASE_PATH=/

# Instala deps
COPY package*.json ./
RUN npm ci

# Copia o resto e builda
COPY . .
RUN npm run build

# 2) Serve (nginx)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
