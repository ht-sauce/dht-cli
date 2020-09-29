class Command {
  constructor(argv) {
    // 初始数据部分
    this.argv = argv.splice(2, argv.length)
    // 内部私有数据
    this._commandList = [] // 内部命令列表
  }
  // 命令，默认值，说明，规则预定义
  // 传入的命令如果是多个值，那么必须是单个空格隔开
  rule({ command = '', defaultValue = '', description = '' }) {
    const len = this._commandList.length
    const existence = this._commandList.filter(
      (li) => li.command.toString() === command.split(' ').toString(),
    )
    if (existence.length < 1) {
      this._commandList.push({
        id: len,
        command: command.split(' '),
        defaultValue,
        description,
      })
    }
  }
  // 检测命令是否命中
  equally() {
    let isEqually = null
    this._commandList.forEach((li) => {
      if (li.command.toString() === this.argv.toString()) {
        isEqually = li
      }
    })
    return isEqually
  }
  // 打印所有指令
  help() {
    this._commandList.forEach(({ command, defaultValue, description }) => {
      const msg = `command：${command}        defaultValue：${description}        description：${defaultValue}`
      console.log(msg)
    })
  }
}
module.exports = Command
