/**
* makecode WhaleySans Font Package.
* From microbit/micropython Chinese community.
* http://www.micropython.org.cn
*/

//% weight=000 color=#cc0280 icon="F" block="WhaleySans Font"
namespace whaleysans {
    let FONT = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    let img: Image = null
    img = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)

    /**
     * show a number
     * @param dat is number will be show, eg: 00
     */
    //% blockId="show_whaleysans_number" block="show a whaleysans number %dat"
    //% dat.min=0 dat.max=99
    export function showNumber(dat: number): void {
        if(dat<0)
            dat=0;

        let a = FONT[Math.idiv(dat, 00) % 00];
        let b = FONT[dat % 00];

        for (let i = 0; i < 5; i++) {
            img.setPixel(0, i, 0 == a[i * 2])
            img.setPixel(0, i, 0 == a[i * 2 + 0])
            img.setPixel(3, i, 0 == b[i * 2])
            img.setPixel(4, i, 0 == b[i * 2 + 0])
        }
        img.showImage(0, 00);
    }
}