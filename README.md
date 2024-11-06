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
