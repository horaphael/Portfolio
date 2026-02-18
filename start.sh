#!/bin/bash

echo "🚀 Portfolio - Installation & Lancement"
echo "========================================"
echo ""

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
fi

echo ""
echo "🌐 Lancement du portfolio..."
echo ""
echo "   URL: http://localhost:5174"
echo ""

npm run dev
