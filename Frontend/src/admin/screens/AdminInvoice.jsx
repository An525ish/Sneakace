import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { req } from '../axiosReqMethods'
import { useLocation } from 'react-router-dom'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { Box } from '@mui/material';
import Sidebar from '../utils/Sidebar';
import "../admin.css"
const Container = styled.div`
  background-color: #F4F5F7;
  min-height: 100%;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;

  @page { size: auto;  margin: 0mm; } // this is for printing to remove date, pageno, title ref: https://stackoverflow.com/questions/17942969/css-media-print-not-working-at-all
    
  @media print {
    background-color: red;
  }
`
const Wrapper = styled.div`
  width: 1200px;  
  max-width: 90%;
  height: 100%;

  
`
const Title = styled.h1`

`
const InvoiceContainer = styled.div`
  border-radius: 1vmax; 
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
`

const First = styled.div`
  display: flex;
  justify-content: space-between;

  >h1 {
    font-size: 1.1rem;

    >p {
      margin: 0
    }
  }

  >div{
    text-align: end;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    >p {
      margin: 0
    }
  }
  @media only screen and (max-width: 700px) {
    flex-direction: column;

    >div {
      text-align: left;
    }
  }
  
`

//status//
const statusColors = {
    pending: { background: "FDF6B2", color: "C6783B" },
    processing: { background: "DEF7EC", color: "87A66E" },
    delivered: { background: "E1EFFE", color: "3F91FA" }
};
const Status = styled.span`
  font-weight: 500;
  margin: 0;
  padding: 0 0.7rem;
  text-align: center;
  border-radius: 50px;
  background-color: #${({ status }) => statusColors[status]?.background};
  color: #${({ status }) => statusColors[status]?.color};
`;
//status END//

const SecondoryTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
`
const SmallTitle = styled.div`
  font-weight: 600;
  font-size: 0.9rem;
  margin: 0.4rem 0;
  color: #707275;
`
const Second = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
  }

`
const ItemContainer = styled.div`
  text-align: ${p => p.right ? "right" : "left"};

  @media only screen and (max-width: 700px) {
    text-align: left;
  }
`


const Third = styled.div`
    margin-top: 20px;   
    overflow: auto;
    border: 1px solid #d5d6d7;
    border-radius: 1vmin;
`
const Table = styled.table`
    width: 100%; 
    min-width: 500px;   
    border-collapse: collapse;  
    overflow: auto  ;
`
const Thead = styled.thead`
    background-color: teal;
    color: white;

    > * {
      font-size: 0.9rem;
    }
`
const Tbody = styled.tbody`
    background-color: white;

    > :nth-last-child() {
        border-bottom: 2px solid teal;
        background-color: red;
    }
    
`
const Td = styled.td`
    padding: 0.75rem 1rem;
    vertical-align: middle;
    margin-top: auto;
    color: ${p => p.price && "red"};
    font-weight: ${p => p.price && 600};


    > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    > svg{
        color: rgb(171,171,171);

        :hover {
            color: rgb(130,130,130);
        }
    }

    > div > svg {
        color: rgb(171,171,171);
        :hover {
            color: rgb(130,130,130);
        }
    }




    @media only screen and (min-width: 700px) {
      padding: 0.75rem 0.5rem;
    }
`
const Tr = styled.tr`
    border-bottom: 1px solid #d5d6d7;

`
const Fourth = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #F4F5F7;
  border-radius: 1vmax;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`

const FourthChild = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  >span {
    font-weight: 600;
  }
`

const PrintBtn = styled.button`

  padding: 0.7rem 1.5rem;
  border-radius: 1vmin;
  background-color: teal;
  color: white;
  border: none;
  margin: 1rem 0;
  font-weight: 400;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;

  :hover {
    background-color: #00a5a5;
  }
`


function AdminInvoice() {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [order, setOrder] = useState()

    //   useEffect(() => {
    //     (async () => {
    //       try {     
    //         const {data} = await axios.get(`api/orders/${id}`) 
    //         setOrder(data)
    //       } catch (error) {

    //       }
    //     })()
    //   },[])


    const [isSidebar, setIsSidebar] = useState(true);
    const handlePrint = () => {
        let printContents = document.getElementById('invoice-container').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        window.location.reload();
    }
    return (

        <div className="admin">
            <Sidebar isSidebar={isSidebar} />
            <div className="content">
                <Box m="20px">
                    <Container>
                        {<Wrapper>
                            <Title>Invoice</Title>
                            <div id="invoice-container">
                                <InvoiceContainer id="invoice">
                                    <First>
                                        <h1>
                                            INVOICE
                                            <SmallTitle>STATUS: <Status status="pending">pending</Status></SmallTitle>
                                        </h1>
                                        <div>
                                            <h2 style={{ margin: 0, marginBottom: "0.5rem" }}>SNEAKACE</h2>
                                            <p>Delhi <br /> India</p>
                                        </div></First>
                                    <Second>
                                        <ItemContainer>
                                            <SecondoryTitle>DATE</SecondoryTitle>
                                            22 nov
                                        </ItemContainer>
                                        <ItemContainer>
                                            <SecondoryTitle>ORDER ID</SecondoryTitle>
                                            order ID
                                        </ItemContainer>
                                        <ItemContainer right={true}>
                                            <SecondoryTitle>INVOICE TO.</SecondoryTitle>
                                            user-name<br />
                                            user-mobile number<br />
                                            user full address- 545-5024 Non, Rd.
                                        </ItemContainer>
                                    </Second>
                                    <Third>
                                        <Table>
                                            <Thead>
                                                <tr>
                                                    <Td>SR.</Td>
                                                    <Td>PRODUCT NAME</Td>
                                                    <Td>QUANTITY</Td>
                                                    <Td>ITEM PRICE</Td>
                                                    <Td>TOTAL</Td>
                                                </tr>
                                            </Thead>
                                            <Tbody>

                                                <Tr>
                                                    <Td>1</Td>
                                                    <Td>reflective</Td>
                                                    <Td><b>$ 299</b></Td>
                                                    <Td><b>4</b></Td>
                                                    <Td price={true}>$1200</Td>
                                                </Tr>


                                            </Tbody>
                                        </Table>
                                    </Third>
                                    <Fourth>
                                        <FourthChild>
                                            <SecondoryTitle>PAYMENT METHOD</SecondoryTitle>
                                            <span>order type</span>
                                        </FourthChild>
                                        <FourthChild>
                                            <SecondoryTitle>TRANSACTION COST</SecondoryTitle>
                                            <span>2</span>
                                        </FourthChild>
                                        <FourthChild>
                                            <SecondoryTitle>DISCOUNT</SecondoryTitle>
                                            <span>0</span>
                                        </FourthChild>
                                        <FourthChild>
                                            <SecondoryTitle>TOTAL AMOUNT</SecondoryTitle>
                                            <span>1300</span>
                                        </FourthChild>
                                    </Fourth>
                                </InvoiceContainer>
                            </div>
                            <PrintBtn onClick={handlePrint}>Print invoice <LocalPrintshopIcon /></PrintBtn>
                        </Wrapper>}
                    </Container>
                </Box>

            </div>
        </div>

    )
}

export default AdminInvoice