import React from "react";
import "./CustomerReview.css";
function CustomerReviews() {
  let comments = [1, 2, 3, 4, 5];
  return (
    <div>
      <div class="container justify-content-center mt-5 border-left border-right">
        <div class="d-flex justify-content-center pt-3 pb-2">
          <input
            type="text"
            name="text"
            placeholder="+ Add a note"
            class="form-control addtxt"
          />
        </div>
        <div class="d-flex justify-content-center py-2">
          <div class="second py-2 px-2">
            {" "}
            {comments.map(() => {
              return (
                <div class="comment-box py-2 px-2">
                  {" "}
                  <span class="text1">
                    Type your note, and hit enter to add it
                  </span>
                  <div class="d-flex justify-content-between py-1 pt-2">
                    <div>
                      <img src="https://i.imgur.com/AgAC1Is.jpg" width="18" />
                      <span class="text2">Martha</span>
                    </div>
                    <div>
                      <span class="text3">Upvote?</span>
                      <span class="thumbup">
                        <i class="fa fa-thumbs-o-up"></i>
                      </span>
                      <span class="text4">3</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
