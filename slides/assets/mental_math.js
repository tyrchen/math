class MentalMath {
    // any two digits number plus
    addTens(opts = {}) {
        const { max, min, total } = this.parseOpts(opts);
        return this.genManyExpr(total, "+", () => this.getRandomInt(min, max), () => this.getRandomInt(min, max));
    }

    // any three digits number plus
    addHundreds(opts = { min: 101, max: 999 }) {
        const { max, min, total } = this.parseOpts(opts);
        return this.genManyExpr(total, "+", () => this.getRandomInt(min, max), () => this.getRandomInt(min, max));
    }

    // complement number by 100
    complementNumberBy100(opts = {}) {
        const { max, min, total } = this.parseOpts(opts);
        return this.genManyExpr(total, "-", () => 100, () => this.getRandomInt(min, max));
    }

    // complement number by 1000
    complementNumberBy1000(opts = { min: 101, max: 999 }) {
        const { max, min, total } = this.parseOpts(opts);
        return this.genManyExpr(total, "-", () => 1000, () => this.getRandomInt(min, max));
    }

    // any number multiple 11
    multiplyBy11(opts = {}) {
        const { max, min, total } = this.parseOpts(opts);
        return this.genManyExpr(total, "x", () => this.getRandomInt(min, max), () => 11);
    }

    // square ends with 5
    squareEndsWith5(opts = {}) {
        const { total } = this.parseOpts(opts);
        const d1 = this.getRandomInt(1, 9);
        const num = d1 * 10 + 5;
        console.log(d1, num);
        return this.genManyExpr(total, "x", () => num, () => num);
    }

    // 10th digit is the same and the last digit complements
    specialMultiply(opts = {}) {
        const { total } = this.parseOpts(opts);
        const d0 = this.getRandomInt(1, 9);
        const d1 = this.getRandomInt(1, 9);
        return this.genManyExpr(total, "x", () => d1 * 10 + d0, () => d1 * 10 + 10 - d0);
    }

    // multiply (less than 20)
    multiply20(opts = { min: 11, max: 19 }) {
        const { max, min, total } = this.parseOpts(opts);
        return this.genManyExpr(total, "x", () => this.getRandomInt(min, max), () => this.getRandomInt(min, max));
    }

    // two digits multiply one digits
    multiply2and1(opts = {}) {
        const { max, min, total } = this.parseOpts(opts);
        return this.genManyExpr(total, "x", () => this.getRandomInt(min, max), () => this.getRandomInt(1, 9));
    }

    // two digits multiply one digits
    multiply3and1(opts = { min: 101, max: 999 }) {
        const { max, min, total } = this.parseOpts(opts);
        return this.genManyExpr(total, "x", () => this.getRandomInt(min, max), () => this.getRandomInt(1, 9));
    }

    // multiple any two digits
    multiply2and2(opts = {}) {
        const { max, min, total } = this.parseOpts(opts);
        return this.genManyExpr(total, "x", () => this.getRandomInt(min, max), () => this.getRandomInt(min, max));
    }

    // render the result
    render(id, data) {
        const html = data.map(item => `<p style="font-size: 120px; line-height: 300px"><b>${item.a}</b> ${item.op} <b>${item.b}</b> = <span class="answer">${item.ret}</span></p>`).join('');
        const el = document.getElementById(id).getElementsByTagName('div')[0];
        el.innerHTML = html;
    }

    // reveal the answer
    showAnswer(id) {
        const el = document.getElementById(id).getElementsByClassName('answer')[0];
        if (el && el.classList.contains('answer')) el.classList.remove('answer');
    }

    // private functions

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    parseOpts(opts) {
        return {
            max: opts.max || 99,
            min: opts.min || 12,
            total: opts.total || 1
        };
    }

    genManyExpr(total, op, fn1, fn2) {
        return Array(total).fill().map(() => this.genExpr(fn1(), fn2(), op));
    }

    genExpr(a, b, op) {
        const ret = (() => {
            switch (op) {
                case '+': return a + b;
                case '-': return a - b;
                case 'x': return a * b;
                case '/': return a / b;

            }
        })();
        return { a, b, op, ret };
    }

}
