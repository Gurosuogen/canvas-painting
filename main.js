let canvas = document.getElementById("canvas");
        canvas.width = document.documentElement.clientWidth
        canvas.height = document.documentElement.clientHeight
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "black";
        ctx.strokeStyle = 'none'
        ctx.lineWidth = 8;
        ctx.lineCap = "round";

        let painting = false
        let last

        var isTouchDevice = 'ontouchstart' in document.documentElement;
        if (isTouchDevice) {
            canvas.ontouchmove = (e) => {
                let x = e.touches[0].clientX
                let y = e.touches[0].clientY
                ctx.beginPath();
                ctx.arc(x, y, 10, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
            }
        } else {
            
            canvas.onmousedown = (e) => {
            painting = true
            last = [e.clientX, e.clientY]
            console.log(last)
        }

        canvas.onmousemove = (e) => {
            if (painting === true) {
                console.log(last)
                ctx.beginPath();
                drawLine(last[0],last[1],e.clientX,e.clientY)
                last = [e.clientX, e.clientY]
            } 
        }

        canvas.onmouseup = () => {
            painting = false
            }
        }

        function drawLine(x1, y1, x2, y2) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }