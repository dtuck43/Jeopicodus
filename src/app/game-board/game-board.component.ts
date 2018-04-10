import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import * as $ from 'jquery';
import { Question } from '../models/question.model';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
public categoryArray:string[] = [];

public cat1Array:Question[] = [];
public cat2Array:Question[] = [];
public cat3Array:Question[] = [];
public cat4Array:Question[] = [];
public cat5Array:Question[] = [];

  constructor() { }

  ngOnInit() {
  }

}

const gameBoard:GameBoardComponent = new GameBoardComponent();


//COLUMN 1 API CALL
$(document).ready(function() {
  let randomCategory = Math.floor(Math.random() * 24) + 9;
  $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
    let question1 = new Question(response.results[0].category, response.results[0].question, response.results[0].correct_answer, response.results[0].incorrect_answers);
    gameBoard.cat1Array.push(question1);

    let question2 = new Question(response.results[1].category, response.results[1].question, response.results[1].correct_answer, response.results[1].incorrect_answers);
    gameBoard.cat1Array.push(question2);


    let question3 = new Question(response.results[2].category, response.results[2].question, response.results[2].correct_answer, response.results[2].incorrect_answers);
    gameBoard.cat1Array.push(question3);


    let question4 = new Question(response.results[3].category, response.results[3].question, response.results[3].correct_answer, response.results[3].incorrect_answers);
    gameBoard.cat1Array.push(question4);


    let question5 = new Question(response.results[4].category, response.results[4].question, response.results[4].correct_answer, response.results[4].incorrect_answers);
    gameBoard.cat1Array.push(question5);

    $("#category-one").text($("<div/>").html(question1.category).text());
    gameBoard.categoryArray.push(response.results[0].category);
    // console.log(gameBoard.categoryArray);
  }).fail(function(error) {
  });

  $('#category-one-question-one').click(function() {
    $('.transbox').hide();
    $('.wrapperAnswer').show();
    $('#question-box').text($("<div/>").html(gameBoard.cat1Array[0].question).text());
    $("#answer-option-one").text(gameBoard.cat1Array[0].choices[0]);
    $("#answer-option-two").text(gameBoard.cat1Array[0].choices[1]);
    $("#answer-option-three").text(gameBoard.cat1Array[0].choices[2]);
    $("#answer-option-four").text(gameBoard.cat1Array[0].answer);
  });

  $('#category-one-question-two').click(function() {
    $('.transbox').hide();
    $('.wrapperAnswer').show();
    $('#question-box').text($("<div/>").html(gameBoard.cat1Array[1].question).text());
    $("#answer-option-one").text(gameBoard.cat1Array[1].choices[0]);
    $("#answer-option-two").text(gameBoard.cat1Array[1].answer);
    $("#answer-option-three").text(gameBoard.cat1Array[1].choices[2]);
    $("#answer-option-four").text(gameBoard.cat1Array[1].choices[1]);
  });

  $('#category-one-question-three').click(function() {
    $('.transbox').hide();
    $('.wrapperAnswer').show();
    $('#question-box').text($("<div/>").html(gameBoard.cat1Array[2].question).text());
    $("#answer-option-two").text(gameBoard.cat1Array[2].choices[0]);
    $("#answer-option-one").text(gameBoard.cat1Array[2].answer);
    $("#answer-option-three").text(gameBoard.cat1Array[2].choices[2]);
    $("#answer-option-four").text(gameBoard.cat1Array[2].choices[1]);
  });

  $('#category-one-question-four').click(function() {
    $('.transbox').hide();
    $('.wrapperAnswer').show();
    $('#question-box').text($("<div/>").html(gameBoard.cat1Array[3].question).text());
    $("#answer-option-one").text(gameBoard.cat1Array[3].choices[0]);
    $("#answer-option-three").text(gameBoard.cat1Array[3].answer);
    $("#answer-option-two").text(gameBoard.cat1Array[3].choices[2]);
    $("#answer-option-four").text(gameBoard.cat1Array[3].choices[1]);
  });

  $('#category-one-question-five').click(function() {
    $('.transbox').hide();
    $('.wrapperAnswer').show();
    $('#question-box').text($("<div/>").html(gameBoard.cat1Array[4].question).text());
    $("#answer-option-two").text(gameBoard.cat1Array[4].choices[0]);
    $("#answer-option-one").text(gameBoard.cat1Array[4].answer);
    $("#answer-option-three").text(gameBoard.cat1Array[4].choices[2]);
    $("#answer-option-four").text(gameBoard.cat1Array[4].choices[1]);
  });


  $ if ("#answer-option-one" === gameBoard.cat1Array[4].answer){

  }
});

//COLUMN 2 API CALL

$(document).ready(function() {
  let randomCategory = Math.floor(Math.random() * 24) + 9;
  $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
    if(gameBoard.categoryArray.includes(response.results[0].category) || response.results[0].category === undefined)
  {
    $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
      $("#category-two").text($("<div/>").html(response.results[0].category).text());
      gameBoard.categoryArray.push(response.results[0].category);
      console.log(gameBoard.categoryArray);
    }).fail(function(error) {
    });
  }
  else{
    $("#category-two").text($("<div/>").html(response.results[0].category).text());
    gameBoard.categoryArray.push(response.results[0].category);
    console.log(gameBoard.categoryArray);
  }
  }).fail(function(error) {
    console.log(error);
  });
});


//COLUMN 3 API CALL

$(document).ready(function() {
  let randomCategory = Math.floor(Math.random() * 24) + 9;
  $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
    if(gameBoard.categoryArray.includes(response.results[0].category) || response.results[0].category === undefined)
  {
    $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
      $("#category-three").text($("<div/>").html(response.results[0].category).text());
      gameBoard.categoryArray.push(response.results[0].category);
      console.log(gameBoard.categoryArray);
    }).fail(function(error) {
    });
  }
  else{
    $("#category-three").text($("<div/>").html(response.results[0].category).text());
    gameBoard.categoryArray.push(response.results[0].category);
    console.log(gameBoard.categoryArray);
  }
  }).fail(function(error) {
    console.log(error);
  });
});


//COLUMN 4 API CALL

$(document).ready(function() {
  let randomCategory = Math.floor(Math.random() * 24) + 9;
  $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
    if(gameBoard.categoryArray.includes(response.results[0].category) || response.results[0].category === undefined)
  {
    $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
      $("#category-four").text($("<div/>").html(response.results[0].category).text());
      gameBoard.categoryArray.push(response.results[0].category);
      console.log(gameBoard.categoryArray);
    }).fail(function(error) {
    });
  }
  else{
    $("#category-four").text($("<div/>").html(response.results[0].category).text());
    gameBoard.categoryArray.push(response.results[0].category);
    console.log(gameBoard.categoryArray);
  }
  }).fail(function(error) {
    console.log(error);
  });
});


//COLUMN 5 API CALL

$(document).ready(function() {
  let randomCategory = Math.floor(Math.random() * 24) + 9;
  $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
    if(gameBoard.categoryArray.includes(response.results[0].category) || response.results[0].category === undefined)
  {
    $.get(`https://opentdb.com/api.php?amount=5&category=${randomCategory}&difficulty=easy&type=multiple`).then(function(response) {
      $("#category-five").text($("<div/>").html(response.results[0].category).text());
      gameBoard.categoryArray.push(response.results[0].category);
      console.log(gameBoard.categoryArray);
    }).fail(function(error) {
    });
  }
  else{
    $("#category-five").text($("<div/>").html(response.results[0].category).text());
    gameBoard.categoryArray.push(response.results[0].category);
    console.log(gameBoard.categoryArray);
  }
  }).fail(function(error) {
    console.log(error);
  });
});
