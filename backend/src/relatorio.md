# Parâmentros dos dados dos relatórios

## Usuário
### Rota: .../user/get/report

Retorno: __{'error' : boolean, 'report' : json}__

__Parâmentros *report*:__

Parâmetro | O que é
----      | ----
quant (int) | Quantidade de usuários cadastrados
from (json) | Uma lista dos locais cadastrados e a quantidade de usuários de cada um
materials (float) | Média de materiais cadastrados por usuários
adm (int) | Quantidade de administradores cadastrados

---

---
## Materiais
### Rota: .../material/get/report

Retorno: __{'error' : boolean, 'report' : json}__

__Parâmentros *report*:__

Parâmetro | O que é
----      | ----
quant (int) | Quantidade de materiais cadastrados
type (json) | Lista de tipos de materiais cadastrados e a quanitidade de cada um
sharingType (json) | Lista dos tipos de compartilhamento de materiais cadastrados e a quanitidade de cada um
physical (int) | Quantidade de materiais físicos
digital (int) | Quantidade de materiais digitais
heart (int) | Média de corações por material
local (json) | Lista dos locais dos materiais e quantidade de cada um
category (json) | Lista de categorias e quantidade de materiais em cada uma
available (int) | Quantidade de materiais disponíveis
---
