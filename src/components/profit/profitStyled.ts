import Styled from 'styled-components'

interface ProfitProps {
    percentage: number
    month: number
}

interface InvestmentProps {
    investment: number
}

export const ReceivedProfit = Styled.div<ProfitProps>`
   position: relative;
   width: 150px;
   height: 192px;
   background: #fff;
   border-radius: 15px;
   box-shadow: 20px 10px 60px rgba(0, 0, 0, 0.07);

  :after {
    content: '';
    position: absolute; 
    bottom: 0; left: 0;
    width: 100%;
    height: ${({percentage, month}) => percentage + (month === 4 ? 0 : month)}%;
    background: #FBED10;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    border-radius: 0 0 15px 15px;
  }
`
export const InvestmentProfit = Styled.div<InvestmentProps>`
  position: relative;
  width: 150px;
  height: 100px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 20px 10px 60px rgba(0, 0, 0, 0.07);
  
  :after {
    content: '';
    position: absolute; 
    bottom: 0; left: 0;
    width: 100%;
    height: ${({investment}) => investment}%;
    background: #FBED10;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    border-radius: 0 0 15px 15px;
  }
`
