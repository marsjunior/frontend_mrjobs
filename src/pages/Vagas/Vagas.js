import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '../../components/Menu';
import ButtonTransparent from '../../components/ButtonTransparent';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Vagas.css';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  iconBack: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    color:'#fff',
  },
  espaco: {
    ...theme.mixins.toolbar,
  },
  titulo: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  card: {
    minWidth: 275,
    marginBottom: '15px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    color: '#F49400'
  },
  conteudo: {
    marginBottom: 10,
  },
  salario: {
    fontWeight: 800,
    lineHeight: '31px',
  },
  divisao: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  botao: {
    margin: 0,
  },
  contentCard: {
    padding: '16px !important',
  },
}));

export default function Vagas(props){
  const classes = useStyles();  

  return (
    <div className={classes.root}>
      <Menu titulo='Vagas' searchCondicao="true"/>
      <main className={classes.content}>
        <div className={classes.espaco} />
        <Card className={classes.card}>
          <CardContent className={classes.contentCard}>
            <Typography className={classes.title} variant="h6" gutterBottom >
                Operador de telemarketing
            </Typography>
            <Typography className={classes.conteudo}>
              Orbital Powred by Stefanini
            </Typography>
            <Typography className={classes.conteudo}>
              Campina Grande - PB
            </Typography>
            <Typography className={classes.conteudo}>
              Ensino Médio
            </Typography>
            <div className={classes.divisao}>
              <Typography className={classes.salario}>
                R$ 1200
              </Typography>
              <ButtonTransparent variant="outlined" color="inherit" className={classes.botao}>+ Detalhes</ButtonTransparent>
            </div>
          </CardContent>
          </Card>
    <Card className={classes.card}>
      <CardContent className={classes.contentCard}>
        <Typography className={classes.title} variant="h6" gutterBottom>
          Operador de telemarketing
        </Typography>
        <Typography className={classes.conteudo}>
          Orbital Powred by Stefanini
        </Typography>
        <Typography className={classes.conteudo}>
          Campina Grande - PB
        </Typography>
        <Typography className={classes.conteudo}>
          Ensino Médio
        </Typography>
        <div className={classes.divisao}>
          <Typography className={classes.salario}>
            R$ 1200
          </Typography>
          <ButtonTransparent variant="outlined" color="inherit" className={classes.botao}>+ Detalhes</ButtonTransparent>
        </div>
      </CardContent>
    </Card><Card className={classes.card}>
      <CardContent className={classes.contentCard}>
        <Typography className={classes.title} variant="h6" gutterBottom>
          Operador de telemarketing
        </Typography>
        <Typography className={classes.conteudo}>
          Orbital Powred by Stefanini
        </Typography>
        <Typography className={classes.conteudo}>
          Campina Grande - PB
        </Typography>
        <Typography className={classes.conteudo}>
          Ensino Médio
        </Typography>
        <div className={classes.divisao}>
          <Typography className={classes.salario}>
            R$ 1200
          </Typography>
          <ButtonTransparent variant="outlined" color="inherit" className={classes.botao}>+ Detalhes</ButtonTransparent>
        </div>
      </CardContent>
    </Card>
    <Card className={classes.card}>
      <CardContent className={classes.contentCard}>
        <Typography className={classes.title} variant="h6" gutterBottom>
          Operador de telemarketing
        </Typography>
        <Typography className={classes.conteudo}>
          Orbital Powred by Stefanini
        </Typography>
        <Typography className={classes.conteudo}>
          Campina Grande - PB
        </Typography>
        <Typography className={classes.conteudo}>
          Ensino Médio
        </Typography>
        <div className={classes.divisao}>
          <Typography className={classes.salario}>
            R$ 1200
          </Typography>
          <ButtonTransparent variant="outlined" color="inherit" className={classes.botao}>+ Detalhes</ButtonTransparent>
        </div>
      </CardContent>
    </Card>
      </main>
    </div>
  );
}