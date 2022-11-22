<table align="center" frame="void" >
   <tr>
    <td claass="leftcol"><img src="https://user-images.githubusercontent.com/73960471/202878705-152ab78f-e5e5-4804-86b4-2511afd58534.png"
    width="200" alt="Вы не поверите, но это ёжик :)"></td>
    <td valign="center" align="center">

   <h3>Scenery Vision. WEB демонстрация</h3>

[![Project](https://img.shields.io/badge/Project-SceneryVision-red)](https://pt.2035.university/project/scenery-vision)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-AGPL--3.0%20license-blue)](LICENSE.md)

   </tr>
  </table>

---

<p align="center">
Scenery Vision - интеллектуальная система для автоматической генерации текста с помощью ИИ.
    <br>
</p>

## 📝 Содержание

- [Постановка задачи](#problem_statement)
- [Решение](#idea)
- [Идеи развития](#future_scope)
- [Как запустить](#getting_started)
- [Как использовать](#usage)
- [Использованные технологии](#tech_stack)
- [Авторы](#authors)

## 🧐 Постановка задачи <a name = "problem_statement"></a>

Любое изделие требует четкого описания. Для эффективного продвижения, необходимо уметь красиво преподносить все особенности и характеристики изделий. Такое описание можно придумать, но для большого количества товаров – это очень большие трудозатраты

Цель:
Создание интеллектуального системного приложения для автоматизации генерация текста для товаров и различных продуктов, с возможностью адаптации под иностранные языки.

## 💡 Решение <a name = "idea"></a>

Для достижения поставленной цели было разработана концепция системы. Система разделена на 2 основные части - сервер и клиент, для демонстрации клиентом может выступать Web приложение или web-интерфейс. В данном репозитории рассматривается Desktop-приложение-клиент. Web-интерфейс написано на языке Node JS с использованием Express JS и HBS JS. Оно умеет принимать принимать артикул, отправлять его на сервер, получать результаты генерации и характеристик с сервера и формировать вывод в интерфейс.

## 🚀 Идеи развития <a name = "future_scope"></a>

В ближайшее время планируется создать редизайн интерфейса и добавить некоторые фичи.

## 🏁 Как запустить <a name = "getting_started"></a>

Данная инструкция поможет вам запустить и протестировать наше приложение. Стабильная версия приложения находится в ветке main/master

### Библиотеки

Все необходимые библиотеки устанавливаются с помощью следующей команды.

``` bash
npm install
```

### Установка и запуск

Для работы с приложением необходимо запустить файл index.js

``` bash
npm run start
```

## 🎈 Как использовать <a name="usage"></a>

Для полноценной работы приложения сервер должен быть запущен. Также необходим выход в интернет для подгрузки картинок. После открытия веб-приложения можно ввести необходимый артикул. Далее приложение отправляет артикул на сервер, и выводит полученные результаты в интерфейс. В любой момент можно ввести новый артикул.

## ⛏️ Использованные технологии <a name = "tech_stack"></a>

- [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework
- [HBS.js](https://handlebarsjs.com/) - Minimal templating framework on steroids

## ✍️ Авторы <a name = "authors"></a>

- [@lmk4](https://github.com/lmk4) - UI/UX Design
- [@overfitted](https://github.com/overfitted) - Realization
