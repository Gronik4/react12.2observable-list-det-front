# "Continuous Deployment"  
блок React ДЗ №12.2(Observable) задача: Список и детали.

## 'Описание': 
Напишите проект, использующий React Router и Redux Observable, который удовлетворяет следующим условиям:  
1. На главной странице показывается список услуг, редактирование не нужно, достаточно просто ссылок — данные загружаются методом GET на http://localhost:7070/api/services.
2. При переходе по ссылке (/:id/details), загружаются детали услуги — GET на http://locahost:7070/api/services/:id.
3. При загрузке должен отображаться индикатор загрузки, что на странице списка, что на странице деталей:
4. При ошибке должно показываться сообщение об ошибке и кнопка «Повторить запрос», при нажатии на которую осуществляется попытка снова выполнить запрос с индикатором загрузки и т. д.:  
### 'Пояснение":  
Поскольку на Heroku развернуть сервер не удалось, а замена не найдена. Пока. Мной. Этот backend нужно клонировать себе на машину и запустить локально (npm run watch). 

Адрес сервера: https://github.com/Gronik4/react12.2observable-list-det-back


**Project Sample** [![Build status](https://ci.appveyor.com/api/projects/status/1ri6hq86wum4acux?svg=true)](https://ci.appveyor.com/project/Gronik4/react9-2router-crud-front-1c5m6)

[Посмотреть результат](https://gronik4.github.io/react12.2observable-list-det-front/)
