import app from './app';

// Faz uma única tarefa: inicializar o servidor na porta 3000.
app.listen(3000, ()=>{
    console.log('Ouvindo a porta 3000');
});