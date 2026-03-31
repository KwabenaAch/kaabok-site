#!/bin/bash

cd /Users/boakye/Desktop/kaabok-site

# Check if there are any changes
if [[ -n $(git status --porcelain) ]]; then
  git add .
  git commit -m "Auto-backup: $(date '+%Y-%m-%d %H:%M:%S')"
  git push origin main
fi
