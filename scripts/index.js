const inquirer = require('inquirer')
const Command = require('./command')
const command = new Command(process.argv)

// 规则预定义
/*command.rule({ command: '111 222', description: 'ceshi', defaultValue: '111 222' })

console.log(command.equally().id)

command.help()*/

inquirer
  .prompt([
    {
      type: 'input',
      message: '请输入你的姓名：',
      name: 'name',
      default: '小哥哥',
    },
    {
      type: 'input',
      message: '请输入你的姓名2：',
      name: 'name2',
      default: '帅哥',
    },
  ])
  .then((answer) => {
    // 用户输入的结果最终会在这里输出
    console.log(answer)
  })
  .catch()
