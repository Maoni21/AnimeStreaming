FROM python:3.9-slim

WORKDIR /app

# Installer les dépendances système si nécessaire
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copier et installer les requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier le reste du projet
COPY . .

# Variable d'environnement pour Flask
ENV FLASK_APP=app/__init__.py
ENV FLASK_RUN_HOST=0.0.0.0

# Exposer le port
EXPOSE 5000

# Commande par défaut
CMD ["flask", "run"]