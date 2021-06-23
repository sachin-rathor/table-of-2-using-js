var num = 1

var res

function Table() {
    while (num <= 10) {
        document.write(2)
        document.write(" * ")
        document.write(num)
        document.write(" = ")
        res = 2 * num;
        document.write(res)
        num += 1;
        document.write("<br/>")
    }
    document.write("Done with testing.")
}