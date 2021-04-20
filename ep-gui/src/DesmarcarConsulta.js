import React from 'react';

class AgendamentoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            agendamentoList: ['memes1', 'memes2', 'memes3', 'memes4']
        }
    }

    render(){
        return(
            <table>
                <tbody>
                    {this.createTable()}
                </tbody>
            </table>
        )
    }

    removeAgendamento(agendamento){
        console.log(agendamento)
    }

    createTable = () =>{
        let table = []
        let class_name = "al-row"
        for (let i = 0; i < this.state.agendamentoList.length; i++) {
            table.push(<tr className={class_name+(i+1)} key={i}>
                <td>{this.state.agendamentoList[i]}</td>
                <td><button className="desmarcar" onClick={() => this.removeAgendamento(this.state.agendamentoList[i])}>Desmarcar Consulta</button></td>
            </tr>)
        }
        return table
    }
}

class DesmarcarConsulta extends React.Component{
    render(){
        return(
            <div className="agendamentoList">
                <AgendamentoList />
            </div>    
        );
    }
}

export default DesmarcarConsulta;