import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="skill">
        <i class="fa fa-code-fork"></i>
        <h2 className="skill-header">Algorithm</h2>
        <p className="skill-details">
          Algorithms are at the heart of computer science. To borrow a
          definition from Investopedia, “An algorithm is a set of instructions
          for solving a problem or accomplishing a task. One common example of
          an algorithm is a recipe, which consists of specific instructions for
          preparing a dish/meal.” As odd as it is to think of a programming term
          through a culinary lens, the metaphor works. Algorithms make it
          possible to provide step-by-step guidelines for how a program should
          run and execute a specific technical solution, such as displaying
        </p>
      </div>
      <div className="skill">
        <i class="fa-solid fa-folder-tree"></i>
        <h2 className="skill-header">Data Structure</h2>
        <p className="skill-details">
          An understanding of algorithms leads us to our next hard skill:
          comprehending and using data structures. While an algorithm can order
          data when it is directed to do so, programmers need to understand how
          the data is organized in the first place. Data structures allow
          programmers to store data within specific frameworks and better
          facilitate communication between back end operations and front end
          users. There are several commonly-used data structures. An array, for
          example,
        </p>
      </div>
      <div className="skill">
        <i class="fa-solid fa-database"></i>
        <h2 className="skill-header">SQL & NoSQL </h2>
        <p className="skill-details">
          Two of the most common types of programming languages that are used to
          communicate with databases on the back ends of web pages are SQL and
          NoSQL. Back end development is the part of the website that visitors
          do not see; it’s where programmers work on dictating the code that
          structures the visible part of the website. The back end stores and
          organizes data so that the visible side of the site continuously
          works. When users take action on the front end of a website, those
          actions send information to the back end, which is then translated
          into information the browser understands and can provide a response
          to.
        </p>
      </div>
    </div>
  );
}
