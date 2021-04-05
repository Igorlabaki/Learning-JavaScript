select * from estados as e, cidades as c 
where e.id = c.estado_id  


SELECT e.sigla as Estado, e.regiao, c.nome as Cidade 
FROM estados e,cidades c
WHERE e.id = c.estado_id

SELECT 
    e.sigla as Estado,
    e.regiao, 
    c.nome as Cidade 
FROM estados e
INNER JOIN cidades c on e.id = c.estado_id
