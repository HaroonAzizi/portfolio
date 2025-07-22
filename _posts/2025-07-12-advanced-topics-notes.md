---
title: "Advanced Topics in Software Engineering | Haroon's Notes"
excerpt: "Haroon's Notes - this isn't complete and you should read your own notes too."
date: "2025-07-21"
readTime: "30 min read"
category: "Notes"
featured: false
image: "/images/haroon.png"
---

9 Apr 2025 (after eid)

Google: **What is Grant Chart?** - you should do this for Ryazi 21.

Last topic: data flow arc.

#### Call and Return Architecture

In this there is a main (controller) component which can call/invoke other program components. It has two variations:

- main program / sub program arc: the classic program structure
- Remote procedure call: the components are distributed across multiple clients on a network.

example (for class work):

```python

num1 = int(input("enter the first num: "))

num2 = int(input("enter the second number: "))

op = input("enter the operation (+, -, *, /): ")



def addition(a, b):

	res = a + b

	print (res)

def subtruction(a, b):

	res = a - b

	print (res)

def division (a, b):

	res = a / b

	print (res)

def multiplication(a, b):

	res = a * b

	print (res)


if (op == "+"):

	addition(num1, num2)

elif (op == "-"):

	subtruction(num1, num2)

elif(op == "/"):

	division(num1, num2)

else:

	multiplication(num1, num2)
```

#### UML - Unified Modeling Language:

**is used to visualize system's design**. It is widely used in software engineering in UML design classes represent components of the system.

EXAM: either the example on your phone about UML or the example about ATM will be there at exam.
Also, create usecase diagram for ATM machine.

---

(16 April)
For the Data Mining project, do these and present it in Advanced topics:
**Important topics for each project:** (for your final semester)

- _Architectural design._ (5 types of arc design?)
- _Use case diagram._
- _Time sequence diagram._
- _Use 3 golden rules in interface._
- _Use Figma to create user interface._

Make a time sequence diagram for your login page.

**Time Sequence Diagram:** is a type of diagram used in software engineering and system design to show how objects or components interact with each other over time.

It shows who talks to whom, in what order and at what time.
Used in software design to explain the flow of a process.

Diagram of login page in notebook.

**Time sequence diagram is created for each process (page) differently.**

ATM (withdrawal) time sequence in picture.

---

### The Layered Architecture:

Each one performing set of activities and providing services to the next layer.

OS layers:

- Application layer
- Kernel
- Hardware

Lyayered Arc:

- Application Layer
- Reper.. Layer
- (picture)

**Layered Arc is used for web applications.**
(check photos for the layered arc of web application)

### User Interface Design Priciples:

These are the guidelines that help us create more **predictible**, **easy to use** and more **consistent** user interface.

We have 3 golden rules for user interface design:

#### Golden rule #1 - Place users in control:

1. Use modes judiciously: user should be able to switch between modes.
2. Allow users to use either the keyboard or mouse: your software should be flexible.
3. Allow users to change focus: the progress should be saved/drafted.
4. Display helpful messages: for example, "password should be 8 characters".
5. Provide feedbacks and reversable actions: that will add better experience.
6. Provide meaningful paths and exits: this adds more ease of use.
7. Accomedate for different skill level: should be able to be easily used by beginners and pros.
8. Make the user interface more transparent.
9. Allow users to customize the interface.
10. Allow users to directly manipulate interface objects.

---

(23 - apr - 2025)

#### Golden Rule #2; Reduce User's Memory Load:

For example Chrome has this functionality that helps you save your passwords.

1. Relieve short-term memory.
2. Rely on recognition, not recall.
3. Provide visual cues.
4. Provide defaults, undo and redo.
5. Provide interface shortcuts.
6. Promote an object-action syntax.
7. User real-world metaphors. (using proper icons)
8. User progressive disclosure.
9. Promote visual clarity.

"to be perfect, it is very defficult"

#### Golden Rule #3; Make the user interface consistent:

It will increase software usability. However, it is a lower priority than others.
Consistancy means that everything should be the same. Like, all the buttons and stuff should be on the right place. Although according to Barney Stinson, new is always better, but here it is said that we shouldn't make change and stuff. At least not all of them for all of a sudden.

---

after 25% - (21/may/2025)

# HCI (Human Computer Interface) Design:

It is considered as a problem solving process that has components like planned usage, targer aread, resources, cost and viability. HCI is to design interface that how the user will interact with computer.

### Planned Usage:

Invistigate the purpose user will use the system. Invistigate how the user will use the system.

### Target Area:

Specifies the area or areas which the usr will use for interaction.

### Resources:

What are the resources required to build the interface.

### Cost:

Estimate the cost to design and implement the interface. Here, the designer tries to create cost-effective design.

### Viability:

Evaluate the design weather it is practically implementable or not.

_Note: 5 components and 4 activities._

**Activities:**

### 1- Identifying Requirements:

In this activity the designer invistigates that what the user need from the system. It includes:

1. Gathering requirements about the goals, tasks and envirnomnet the user will use the system for.
2. Try to understand user limitaions. e.g physical.
3. Defining functional requirements (what the system should do) and non functional requirements (performance and security).

### 2- Building alternative designs:

The designer doesn't go for the fast choice, rather they explore multiple solutions which include:

1. Desining multiple scatches and prototypes for the system using AdobeXD or Figma.
2. Trying multiple layouts, navigation structure, and interaction methods.

### 3- Developing interactive versions of the designs:

In this activity the concepts is transformed into working prototype.

1. The prototype can be low fidelity (paper based prototypes or mockings) or high fidelity (funcitonal).
2. Allow user to test the prototype.

### 4- Evaluating designs:

This involove testing the prototype or final product with user to check.

1. what works well.
2. Where the user consist ensurees or stratigies.
3. wheather the system supports user tasks.

# Design Methodologies:

Various methods have materialized since the inception that outline the techniques for human-computer interaction.
HCI design have different design methodologies in which following two are popluar:

1. Activity Theory: In this, designer tries to understand what tools (software) user will use to achieve tasks in specific context. Example: google docs needs write, edit and delete and for that we need a mouse and a keyboard.

2. User-centric Design: user centeric design in HCI refers to placing users at the center of everything. For example: user is involved in the process from requirements to the actual implementation of the design.

## Principles of User Interface Design:

Tolorance, simplicity, visibility, affordance, consistency, structure and feedback are teh seven priciples used in interface designing.

1. Tolorance: minimize user erros.
2. Simplicity: design must be understandable and easy to use.
3. Visibility: all the important features must be visible to the user.
4. Affordance: whatever text or icon we use on the buttons, they should have proper meaning.
5. Consistency: same design language for each page.
6. Structure: the system should be organized. the functionalities should be according to the behavoirs.
7. Feedback: should give feedback to each action.

### Role of UX in User Interface Design?

---

(28 May 2025)

## Value Sensitive Design:

Is an approach that ensures human value integration within design process.
E.g how design supports the privacy.

It also ensures that technology respects and supports social and ethical values.

**Three components of Value Sensitive Design (VSD):**

1. Conceptual Investigation:
   These explor what values need to be considered during the design process of the system. The values that are to be considered are privacy, trust, fairness, etc.
   The purpose of this type of investivgation is to identify the stake holder (the people who will use the system) and their privacy requirements.

2. Empirical Investigation:
   These investigations involove gathering real data from people using interviews, observations, and asking questions. How the use of technology affect on the life of stake holders and how it will effect the design process.

3. Technical Investigation:
   Contain the use of technologies and designs in the conceptual and empirical investigations.

---

(18 - June - 2025) - after eid qurban

## Integration testing:

Integration testing has two approaches:

1. Non incremental testing
2. Incremental testing

### Non incremental testing:

We combine the coponents together and test the system as a whole.

Probibality is very high that it results in chaos because we do not test the integration of components gradually. Non incremental is used when there is time pressure on the development team.

### Incremental testing:

Incremental testing is systematic approach to test the system. The approaches we use for the incremental testing are as follows:

- (1) Top down integration: starting from the main module (funciton) and then going through other modules. to test we create a temprory code (stub).

Stub is a temp code (dummy code) used to test our system in top down integration.

```cpp
#include <iostream>
using namespace std;

int main (){
	int a;
	int b;
	int result = 0;

	cout >> "enter first num";
	cin>> a;
	cout >> "enter second num";
	cin >> b;

	result addition (a,b);
	// we don't have the addition funciton
	// so for that we should create a temp code = stub

	int addition (int a, int b){ // this is the temp code or stub
		int sum = a + b;
		return sum;
	}
}
```

- (2) Bottom up integration: In bottom up, we have the same thing, but instead of stub we call in driver. Driver is a temp code (dummy code) used to test our system in bottom up integration.

```cpp
#include <iostream>
using namespace std;

int main (){
	int a;
	int b;
	int result = 0;

	cout >> "enter first num";
	cin>> a;
	cout >> "enter second num";
	cin >> b;

	result addition (a,b);
	// we don't have the addition funciton
	// so for that we should create a temp code = driver

	int addition (int a, int b){ // this is the temp code or driver
		int sum = a + b;
		return sum;
	}
}
```

- (3) Sandwich integraion: is also called hybrid, it is a combination of top down and bottom up. We go from top as well as from the bottom and then meet in the middle.

- (4) Regression testing: For example you have (-, +, x) in your system and the client asks for division. When you add it, first you test the division itself and then check the 3 other again and see if the newly added funciton has affected any of them.

- (5) Smoke testing: it's a quick check that checks the funcitonalities of the software after it is created. It ensures the build is stable and makes sure that if it is enough for the final testing or not. It only checks the core functionality and doesn't give a fuck about other stuff.

## System Test:

In system test, the whole system is tested for functionalities.

Types of system test:

1. Recovery test: the sytem is tested for how often it fails, and weather recovery is possible or not and how quick it can recover.

2. Security test: the sytem is tested for security by giving the credentials. (username, password)

3. Performance test: overall performance of the system is tested. This testing includes both hadware and software.

4. Stress test: applies maximum load on the system and see how much pressure the system can handle.

## Validation Test:

Validation test valitates the following:

1. User requirement
2. System behavior
3. Functional requirements
4. Documentation (SRS, design, testing document)
5. Usibility (Transportibility, Recovery from error, Maintainability)

Test Approach for Validation Test:

1. Alpha test: alpha test is conducted at developer's site by the user along with developer in controlled envoirnment.
2. Beta test: beta test is conducted by user at user's side without any involvement from the developer.

---

(25 - June - 2025)

# The Art of Debugging:

Debugging is a process that is performed after successful test.

keywords:

- bug = error
- debug = removing the error
- debugging tools = tools used to remvoe the error
- debugging is the process of removing the error

Debugging is more like an art rather than science.
Debuggin process begins with the execution of test case and if there are errors then we'll see what we can do.
In debugging we have expectatino and actual performance. They should meet each other.

**Why is debugging so difficult?**
(check slides)

- human error
- logical error
- syntax error
- timing problem rather than processing problem:
  ```cpp
  sub = sum - 10;
  sum = a + b;
  // first we should write sum and then sub
  ```
- the hardware can be the problem too
  OK. Line 420. Go To Next Next line.

### Debugging Strategies:

There are three main debugging strategies:

1. Brute force: we'll check every part of the program for that error. this is also called exhustive debugging. it will definately find the cause because it goes line by line, but it is very time consuming. should be used in human and financial critical systems.
2. Backtracking: you go up line by line to find the error / mistake
3. Cause elimination [has 6 types (google)]:

i) binary elemination is a type of cause elimination. in this we first create a list on why the problem is occuring, then check the first one, then go to the next and so on...

ii) divide and coquer is another type of cause elimination. we divide our app and do not create a list. dividing it in frontend, api and database.

iii) reproduction: reproduces the bug consistently to understand when and how it occurs.

iv) simplification: reduce the complexity of the scenario to isolate the bug.

v) hypothesis testing: make an educated guess about the cause and test it.

vi) comparison: compare a working version with the buggy one to spot the differences.

### Testing Techniques:

In testing we have testing strategy and testing technique.

Testing techniques include:

**White Box Testing:** test the internal structure of the program to verify wheather the algorithms are implemented effeciently or not. In this type of testing techniques the tester is interested in input adn output.

In white box testing, we design test cases from a konwledge of the internal logic of the software.

White box address these features:

- all independent paths within the module has been exercised at least once.
- exercise all logical decision for their trueness and falseness.
- exercise all loops within inself and also for their boundry values.
- exercise internal data structures for their validity.

_what's the difference between software and program?_
Software is a combination of programs, docs, libraries, etc. So software is a whole and program is a part of the software.

_What's the difference between validation and verification test?_

**Black Box Testing:** black box validates the user requirement, functionalities and behaviour of the system. The tester uses SRS document to validate requirements, fucntionalities and behaviour. In this type of testing, the tester is not interested in internal implementation of the program.

**Gray Box Testing:** grey box is the combination of both white and black box testings. for example: tester wants to validate user name and password when they insert both at the same time, the tester will validate and verify the code. all kinds of forms should be tested in grey box testing technique.

**Yellow Box Testing:** in here, the tester tests system for warnnings.

**Green Box Testing:** the system is tested wheather it is enviornmental friendly or not. low carbon stuff, less heat generation, less paper usage and things like that.

**Note** there's a difference between testing techniques and strategies.

---

(2 Jul 2025)

## White box testing techniques:

### Basis path testing:

Basis path analysis (testing) is one of the white box testing techniques which measures or calculates the independent paths in a program for verification.

Basis path test makes sure that each path must exercise at least once.
It ensures that each statement in a program will be tested at least once.

The method that basis path uses is known as flow graph or program flow.

#### Flow graph / Program flow:

It has two symbols to represent the flow graph:

- Circle: used to represent statement. (for condition we use double circle)
- Arrow: used to represend the direction of the flow.

(a picture of flow graph on your phone) you have a note in notebook too.

In case switch we have a different look for the flow graph. check the slides.

## Black box testing:

Is a testing method which tests the software exteranlly. You match the result with the SRS.
Black box is also called behavioral testing.
Here we test the system for the user requiremetns. The requirements come from the SRS.

Black Box testing mainly focuses on:

- **Incorrect / missing funcitons**
- **Interface errors**: when the data flow doesn't happen. (it isn't only the user interface, for example there can be an error in API)
- **Errors in data structures**
- **External database access**
- **Behavoir / performance errors**
- **Initialization and termination errors**

---

(9 Jul 2025) - Last Lecture
IMPORTANT FOR EXAM

# Object Oriented Process:

Object Oriented Process moves through a spiral that starts with customer communicaiton. We do risk analysis in spiral model and don't do that in others.
It identifies the problem domain and basic classes of the problem.

CBSE = Component Based Software Engineering

Spiral Model is suitable for large projects.

Risk analysis steps? (identify the risk, categorize the risk, manage the risk, monitor the risk)

OOD = Object Oriented Design
There's a diagram in the slides.

In object oriented process we have class test instead of unit test. Because class is a important part of the OOP.
