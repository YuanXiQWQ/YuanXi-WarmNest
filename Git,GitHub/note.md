# 常用Git指令
* 配置基本用户信息
    -git config --global user.name 用户名
    -git config --global user.email 邮箱

* 创建一个新仓库
    -git init

* 从远程服务器克隆一个仓库
    -git clone URL

* 显示当前工作目录下的提交文件状态
    -git sataus

* 将指定文件标记为将要被提交的文件(Stage)
    -git add 文件路径

* 将指定文件取消标记为将要被提交的文件(Unstadge)
    -git reset 文件路径

* 创建一个提交并提供提交信息
    -git commit -m "提交信息"

* 显示提交历时
    -git log

* 向远程仓库推送(push)
    -git push

* 从远程仓库拉取(pull)
    -git pull

# 上传大文件LFS指令
* 创建一个新仓库
    -git init
* 初始化Git LFS
    -git lfs install
* 跟踪大文件
    -git lfs track "*.后缀"
        跟踪所有指定后缀的文件
    或者
    -git lfs track "文件夹/*"
        跟踪指定文件夹的所有文件
* 将LFS追踪方法文件推送到git
    -git add .gitattributes
    -git commit -m"git lfs"
    -git push origin master
* 推送
    -git add 文件
    -git commit -m"注释"
    git push origin master
