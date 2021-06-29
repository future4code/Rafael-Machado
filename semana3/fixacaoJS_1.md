function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const comissao = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05) 
  const salario = comissao + 2000
   
   return salario
   

}