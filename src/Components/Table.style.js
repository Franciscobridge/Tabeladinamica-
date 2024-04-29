import styled  from 'styled-components'

const Table = styled.table`
    width: 90%;
    height: auto;
    margin: 0 auto;
    border-collapse: collapse;
& th{
    border: none;
    border-bottom: 2px solid #fff;
    text-align: left;
    padding: 1rem 1.5rem 1rem 1rem;
    background: #27282A;
    color: #FFA800;
    
}
& td{
    padding: 1rem 1.5rem 1rem 1rem;
    border: none;
    color: #F2F2F2;
    font-size: 1.3rem;
}
`
export default Table;