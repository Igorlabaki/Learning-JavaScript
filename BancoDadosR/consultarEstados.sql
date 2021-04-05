SELECT * FROM estados 
WHERE regiao = 'Norte'

SELECT nome,sigla as 'Nome do Estdo' FROM estados
WHERE regiao = 'Suldeste'

SELECT nome,regiao FROM estados 
WHERE populacao >=10 
order by populacao desc