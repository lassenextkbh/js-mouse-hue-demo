const anchor = document.getElementById('anchor')
const anchorX = 0
const anchorY = 0

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const deg = angle(mouseX, mouseY, anchorX, anchorY)

    const rotatable = document.querySelectorAll('.r');
    rotatable.forEach(r => {
        r.style.filter = `hue-rotate(${deg+90}deg)`
    })
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}