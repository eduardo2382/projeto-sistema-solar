var desc_sol = document.getElementById('desc_sol')
var desc_mercurio = document.getElementById('desc_mercurio')
var desc_venus = document.getElementById('desc_venus')
var desc_terra = document.getElementById('desc_terra')
var desc_marte = document.getElementById('desc_marte')
var desc_jupiter = document.getElementById('desc_jupiter')
var desc_saturno = document.getElementById('desc_saturno')
var desc_urano = document.getElementById('desc_urano')
var desc_netuno = document.getElementById('desc_netuno')
var desc_plutao = document.getElementById('desc_plutao')
var ativo = false
var ultimo = ''

function descricao(planeta){
    
    if(ativo == false){
        switch (planeta) {
            case 'sol':
                desc_sol.style.opacity = 1
                desc_sol.style.left = '-280px'
                break;
            case 'mercurio':
                desc_mercurio.style.opacity = 1
                desc_mercurio.style.left = '-280px'
                break;
            case 'venus':
                desc_venus.style.opacity = 1
                desc_venus.style.left = '-280px'
                break;
            case 'terra':
                desc_terra.style.opacity = 1
                desc_terra.style.left = '-280px'
                break;
            case 'marte':
                desc_marte.style.opacity = 1
                desc_marte.style.left = '-280px'
                break;
            case 'jupiter':
                desc_jupiter.style.opacity = 1
                desc_jupiter.style.left = '-280px'
                break;
            case 'saturno':
                desc_saturno.style.opacity = 1
                desc_saturno.style.left = '-280px'
                break;
            case 'urano':
                desc_urano.style.opacity = 1
                desc_urano.style.left = '-280px'
                break;
            case 'netuno':
                desc_netuno.style.opacity = 1
                desc_netuno.style.left = '-280px'
                break;
            case 'plutao':
                desc_plutao.style.opacity = 1
                desc_plutao.style.left = '-280px'
                break;
            default:
                break;
        }
        ativo = true
        ultimo = planeta
    } else{
        if(ultimo == planeta){
            limpar_desc()
            ativo = false
            ultimo = planeta
        } else{
            limpar_desc()
            switch (planeta) {
                case 'sol':
                    desc_sol.style.opacity = 1
                    desc_sol.style.left = '-280px'
                    break;
                case 'mercurio':
                    desc_mercurio.style.opacity = 1
                    desc_mercurio.style.left = '-280px'
                    break;
                case 'venus':
                    desc_venus.style.opacity = 1
                    desc_venus.style.left = '-280px'
                    break;
                case 'terra':
                    desc_terra.style.opacity = 1
                    desc_terra.style.left = '-280px'
                    break;
                case 'marte':
                    desc_marte.style.opacity = 1
                    desc_marte.style.left = '-280px'
                    break;
                case 'jupiter':
                    desc_jupiter.style.opacity = 1
                    desc_jupiter.style.left = '-280px'
                    break;
                case 'saturno':
                    desc_saturno.style.opacity = 1
                    desc_saturno.style.left = '-280px'
                    break;
                case 'urano':
                    desc_urano.style.opacity = 1
                    desc_urano.style.left = '-280px'
                    break;
                case 'netuno':
                    desc_netuno.style.opacity = 1
                    desc_netuno.style.left = '-280px'
                    break;
                case 'plutao':
                    desc_plutao.style.opacity = 1
                    desc_plutao.style.left = '-280px'
                    break;
                default:
                    break;
            }
            ativo = true
            ultimo = planeta
        }
    }

}

function limpar_desc() {
    desc_sol.style.opacity = 0
    desc_mercurio.style.opacity = 0
    desc_venus.style.opacity = 0
    desc_terra.style.opacity = 0
    desc_marte.style.opacity = 0
    desc_jupiter.style.opacity = 0
    desc_saturno.style.opacity = 0
    desc_urano.style.opacity = 0
    desc_netuno.style.opacity = 0
    desc_plutao.style.opacity = 0
    
    desc_sol.style.left = '-250px'
    desc_mercurio.style.left = '-250px'
    desc_venus.style.left = '-250px'   
    desc_terra.style.left = '-250px'
    desc_marte.style.left = '-250px'
    desc_jupiter.style.left = '-250px'
    desc_saturno.style.left = '-250px'
    desc_urano.style.left = '-250px'
    desc_netuno.style.left = '-250px'
    desc_plutao.style.left = '-250px'
}