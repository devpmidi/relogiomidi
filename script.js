const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const alternarFormatoBtn = document.getElementById('alternarFormato');
const mudarHorarioBtn = document.getElementById('mudarHorario');

let formato24h = true; 
let fusoHorario = 'UTC'; 

alternarFormatoBtn.addEventListener('click', () => {
    formato24h = !formato24h; 
});

mudarHorarioBtn.addEventListener('click', () => {
    // Adicione aqui a lógica para permitir que o usuário escolha um fuso horário
    const novoFusoHorario = prompt('Digite o novo fuso horário (ex: America/New_York ou America/Sao_Paulo):');
    if (novoFusoHorario) {
        fusoHorario = novoFusoHorario;
    }
});

function obterHorarioComFusoHorario(fusoHorario) {
    return new Date().toLocaleString('pt-BR', { timeZone: fusoHorario });
}

const relogio = setInterval(function time() {
    const dataComFusoHorario = obterHorarioComFusoHorario(fusoHorario);
    const partes = dataComFusoHorario.split(' ');
    const [hora, minuto, segundo] = partes[1].split(':');

    let hr = parseInt(hora, 10);
    let min = parseInt(minuto, 10);
    let s = parseInt(segundo, 10);

    if (!formato24h) {
        hr = (hr % 12) || 12; 
    }

    hr = hr < 10 ? '0' + hr : hr;
    min = min < 10 ? '0' + min : min;
    s = s < 10 ? '0' + s : s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}, 1000);
