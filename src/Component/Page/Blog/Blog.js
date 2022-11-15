import React from 'react';

const Blog = () => {
    return (
        <div>
            <br /><br /><br />
            <div className="card-body shadow-xl text-left">
                <h3 className="text-xl font-bold">Q1.  How will you improve the performance of a React Application?</h3>
                <p className='text-left'> <span className="font-bold  "> Answer:</span> <br /> There are ways where you can still speed up your React application. <br />
                    1.Using Immutable Data Structures <br />
                    2. Function components prevent constructing class instances while reducing the overall bundle size as it minifies better than classes. <br />
                    3. Multiple Chunk Files. <br />
                    4. Dependency optimization <br />
                    5. Avoid Inline Function Definition in the Render Function. <br />
                    6. Avoid using Index as Key for map. <br />
                    7. Avoiding Props in Initial States <br />
                </p>
            </div>

            <div className="card-body shadow-xl text-left">
                <h3 className="text-xl font-bold">Q2.  What are the different ways to manage a state in a React application?</h3>
                <p ><span className="font-bold "> Answer:</span> <br />
                    1.The useReducer hook is a powerful provided React hook for dealing with complex state management that doesnt require third-party dependencies. Also, it reduces the amount of data recreated with each render. <br />
                    2. we can make custom React hooks to encompass complex logic into a single accessible hook. This can come in handy for forms, toggles, asynchronous behavior, and anything else where you end up with a mess of hooks in your component. <br />
                    3. Use Data Fetching Libraries


                </p>
            </div>

            <div className="card-body shadow-xl text-left">
                <h3 className="text-xl font-bold">Q3.  How does prototypical inheritance work?</h3>
                <p ><span className="font-bold "> Answer:</span> <br />
                    Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.


                </p>
            </div>

            <div className="card-body shadow-xl text-left">
                <h3 className="text-xl font-bold">Q4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
                <p > <span className="font-bold "> Answer:</span> <br />
                    One should never update the state directly because of the following reasons:

                    If you update it directly, calling the setState() afterward may just replace the update you made.
                    When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                    You will lose control of the state across all components.

                </p>
            </div>

            <div className="card-body shadow-xl text-left">
                <h3 className="text-xl font-bold">Q5.  What is a unit test? Why should write unit tests?

                </h3>
                <p > <span className="font-bold "> Answer:</span> <br />
                    UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

                    In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.

                </p>
            </div>
        </div>
    );
};

export default Blog;