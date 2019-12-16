import React from "react"
import "./ChapterInfo.scss"
import FormFooter from "../Header-Footer/FormFooter"
import FormHeader from "../Header-Footer/FormHeader"

const ChapterInfo = () => {
  return (
    <div className="container">
      <FormHeader />
      <div className="main">
        <div className="main-bold">
          <h2>Chapter Information</h2>
        </div>
        <div>
          <h3 className="title">What Is A Chapter?</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi
            laboriosam totam adipisci! Quos incidunt neque eveniet consectetur
            rerum deleniti placeat numquam saepe dolore quisquam?
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            praesentium eos animi porro voluptatum vel, voluptate maxime ad
            corrupti tempore molestiae similique, reiciendis aperiam quae
            quaerat veritatis, dolorum asperiores reprehenderit? Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Tenetur natus
            laboriosam error voluptatibus velit illum voluptatum quisquam,
            saepe, aliquid fugit nostrum culpa quam officia. Quos provident
            impedit nulla officiis illum!
          </p>
        </div>
        <div>
          <h3 className="title">Heading about Volunteers/Volunteering</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            praesentium eos animi porro voluptatum vel, voluptate maxime ad
            corrupti tempore molestiae similique, reiciendis aperiam quae
            quaerat veritatis, dolorum asperiores reprehenderit?
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            praesentium eos animi porro voluptatum vel, voluptate maxime ad
            corrupti tempore molestiae similique, reiciendis aperiam quae
            quaerat veritatis, dolorum asperiores reprehenderit?
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            praesentium eos animi porro voluptatum vel, voluptate maxime ad
            corrupti tempore molestiae similique, reiciendis aperiam quae
            quaerat veritatis, dolorum asperiores reprehenderit?
          </p>
          <h3 className="title">Who to contact</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            praesentium eos animi porro voluptatum vel, voluptate maxime ad
            corrupti tempore molestiae similique, reiciendis aperiam quae
            quaerat veritatis, dolorum asperiores reprehenderit?
          </p>
        </div>
        <div>
          <button
            className="submitb"
            onClick={() => {
              if (localStorage.getItem("token")) {
                return this.setState(prevState => ({
                  modal: !prevState.modal
                }))
              } else {
                return this.props.history.push("/user/login")
              }
            }}
          >
            I want to create a new chapter
          </button>
        </div>
      </div>
      <FormFooter />
    </div>
  )
}

export default ChapterInfo
