SELECT 
    regiao as 'Região',
    sum(populacao) as 'TOTAL'
FROM estados 
GROUP BY regiao
order by TOTAL DESC

SELECT 
     regiao as 'Região',
    AVG(populacao) as 'TOTAL'
FROM estados
GROUP BY regiao
order by TOTAL DESC
