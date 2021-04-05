select * from cidades c inner join prefeitos p on c.id = p.cidade_id

-- essa so funciona no mysql traz td da tbalea da cidade junto
select * from cidades c left join prefeitos p on c.id = p.cidade_id
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id

select * from cidades c right outer join prefeitos p on c.id = p.cidade_id
select * from cidades c right outer join prefeitos p on c.id = p.cidade_id

-- select * from cidades c full join prefeitos p on c.id = p.cidade_id
-- esse nao funciona nem no mysql aqui tras td
-- se usar union all ele tras ate as duplicacoes
select * from cidades c right outer join prefeitos p on c.id = p.cidade_id
union
select * from cidades c right outer join prefeitos p on c.id = p.cidade_id