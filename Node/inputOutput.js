const anonymous = process.argv.indexOf('-a') !== -1
console.log(anonymous)

if (anonymous) {
    process.stdout.write("Hey, Anonymous!\n")
    process.exit()
} else {
    process.stdout.write("Type your name: ")
    // 'data' === event when type something and press enter
    process.stdin.on("data", data => {
        const name = data.toString().replace("\n", "")
        process.stdout.write(`Hey, ${name}!\n`)
        process.exit()
    })
}