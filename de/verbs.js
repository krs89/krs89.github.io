// main + passive + perfect
// obj_modal + mod_perfect
// subj_modal

const nix = '';
const fin = 'fin';
const inf = 'inf';
const ptc = 'ptc';
const ipp = 'ipp';

const age = 'Chef';
const pat = 'Apfel';
const rec = 'Gast';

const waescht = {'form': fin, 'p1': 'wäscht', 'k1': 'wasche', 'k2': 'wüsche', 'p2': 'wusch'};
const waschen = {'form': inf, 'nonfinite': 'waschen'};
const gewaschen = {'form': ptc, 'nonfinite': 'gewaschen'};

const hat = {'form': fin, 'p1': 'hat', 'k1': 'habe', 'k2': 'hätte', 'p2': 'hatte'};
const haben = {'form': inf, 'nonfinite': 'haben'};
const gehabt = {'form': ptc, 'nonfinite': 'gehabt'};

const ist = {'form': fin, 'p1': 'ist', 'k1': 'sei', 'k2': 'wäre', 'p2': 'war'};
const sein = {'form': inf, 'nonfinite': 'sein'};
const gewesen = {'form': ptc, 'nonfinite': 'gewesen'};

//const kann = {'form': fin, 'p1': 'kann', 'k1': 'könne', 'k2': 'könnte', 'p2': 'konnte'};
const kann = {'form': fin, 'p1': 'muss', 'k1': 'müsse', 'k2': 'müsste', 'p2': 'musste'};
//const koennen = {'form': inf, 'nonfinite': 'können'};
const koennen = {'form': inf, 'nonfinite': 'müssen'};
//const _koennen = {'form': ipp, 'nonfinite': 'können'};
const _koennen = {'form': ipp, 'nonfinite': 'müssen'};

const muss = {'form': fin, 'p1': 'muss', 'k1': 'müsse', 'k2': 'müsste', 'p2': 'musste'};

const wird = {'form': fin, 'p1': 'wird', 'k1': 'werde', 'k2': 'würde', 'p2': 'wurde'};
const werden = {'form': inf, 'nonfinite': 'werden'};
const worden = {'form': ptc, 'nonfinite': 'worden'};

let sort_order = [];
let analytic_verbs_header = [
    'main', 'passive', 'perfect', 'modal', 'perfect', 'guess'
]

let analytic_verbs = [
    [  waescht,   null,    null,     null,  null, null],
    [gewaschen,   wird,    null,     null,  null, null],
    [gewaschen,   null,     hat,     null,  null, null],
    [gewaschen, worden,     ist,     null,  null, null],
    [  waschen,   null,    null,     kann,  null, null],
    [gewaschen, werden,    null,     kann,  null, null],
    [gewaschen,   null,   haben,     kann,  null, null],
    [gewaschen, worden,    sein,     kann,  null, null],
    [gewaschen,   null,    null,     null,   hat, null],
    [gewaschen, worden,    null,     null,   ist, null],
    [gewaschen,   null,  gehabt,     null,   hat, null],
    [gewaschen, worden, gewesen,     null,   ist, null],
    [  waschen,   null,    null, _koennen,   hat, null],
    [gewaschen, werden,    null, _koennen,   hat, null],
    [gewaschen,   null,   haben, _koennen,   hat, null],
    [gewaschen, worden,    sein, _koennen,   hat, null],
    [  waschen,   null,    null,     null,  null, muss],
    [gewaschen, werden,    null,     null,  null, muss],
    [gewaschen,   null,   haben,     null,  null, muss],
    [gewaschen, worden,    sein,     null,  null, muss],
    [  waschen,   null,    null,  koennen,  null, muss],
    [gewaschen, werden,    null,  koennen,  null, muss],
    [gewaschen,   null,   haben,  koennen,  null, muss],
    [gewaschen, worden,    sein,  koennen,  null, muss],
    [gewaschen,   null,    null,     null, haben, muss],
    [gewaschen, worden,    null,     null,  sein, muss],
    [gewaschen,   null,  gehabt,     null, haben, muss],
    [gewaschen, worden, gewesen,     null,  sein, muss],
    [  waschen,   null,    null, _koennen, haben, muss],
    [gewaschen, werden,    null, _koennen, haben, muss],
    [gewaschen,   null,   haben, _koennen, haben, muss],
    [gewaschen, worden,    sein, _koennen, haben, muss],
];

function analyticVerbTable(sortOrder) {
    let table = document.createElement('table');

    let headerRow = document.createElement('tr');
    analytic_verbs_header.forEach( label =>{
        let headerCell = document.createElement('th');
        headerCell.innerText = label;
        headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow);

    analytic_verbs.forEach( verbForm => {
        let row = document.createElement('tr');
        verbForm.forEach( verb => {
            let cell = document.createElement('td');
            if (verb) {
                if (verb.form === fin) {
                    cell.innerText = verb.p1;
                } else {
                    cell.innerText = verb.nonfinite;
                }
                cell.setAttribute('class', verb.form);
            }
            row.appendChild(cell);
        })
        table.appendChild(row);
    });

    return table.outerHTML;
}
