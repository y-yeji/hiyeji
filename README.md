cat ~/.ssh/rsa.pub

ssh-keygen -t rsa -C "dpwlals1017@gmail.com"

git config --list

eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa
ssh -T git@github.com

git init
git remote add origin git@github.com:y-yeji/hiyeji.git
git branch -M main
git add .
git commit -m "msg"
git push origin main

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
