# Use an official Node.js runtime as the base image for the build stage
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy only package files to leverage Docker's caching
COPY package.json pnpm-lock.yaml tsconfig.json ./

# Install pnpm, TypeScript, and dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the project
RUN pnpm run build

# Production stage
FROM node:18-alpine AS production

# Set working directory
WORKDIR /app

# Copy only the necessary built files from the builder stage
COPY --from=builder /app /app

# Install pnpm in the production environment
RUN npm install -g pnpm

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy .env file into the container
COPY .env.local .env.local

# Expose the port
EXPOSE 3000

# Command to run your app
CMD ["pnpm", "run", "dev"]
