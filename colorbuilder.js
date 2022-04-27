class ColorBuilder {
    constructor(name, width, height, callback) {
        this.callback = callback;
        this.name = name;
        this.width = width;
        this.height = height;
        this.colorsList = [];
        this.modelsList = [];
        this.container = document.createElement('table');
        this.container.id = this.name;



    }


    setModel = (modelString) => {
        var parsedString = new DOMParser().parseFromString(modelString, 'text/xml');
        this.colorsList.forEach(color => {
            let el = new DOMParser().parseFromString(modelString.replace(/\{\{COLOR\}\}/g, color.hex), 'text/html');
            let parsedModel = el.firstChild.lastChild.firstChild;
            parsedModel.addEventListener("click", (e) => { this.callback(e, color) });
            parsedModel.classList.add("color-selector");
            this.modelsList.push(el.firstChild.lastChild.firstChild);
        });
        console.log(this.modelsList);
    }
    setColors = (colors) => {
        if (Array.isArray(colors)) {
            colors.forEach(color => {
                if (color.match(/#([a-f0-9]){6}/)) {
                    this.colorsList.push(new Color(color));
                } else {
                    console.log("not a valid color");
                }
            });
        }
    }
    render = () => {
        for (let i = 0; i < this.height; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < this.width; j++) {
                let cell = document.createElement('td');

                cell.appendChild(this.modelsList[i * this.width + j]);
                row.appendChild(cell);
            }
            this.container.appendChild(row);
        }

        document.body.appendChild(this.container);
        console.log(this.container)
    }
}

class Color {
    constructor(hex) {
        this.hex = hex;
    }
}