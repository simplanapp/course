//import { AppRegistry, View } from 'react-native';
//import React, { Component } from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Se } from '../actions/index';
import { Link } from 'react-router';
import { fetchPosts, searchCurses } from '../actions/index';
const icons=['https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/new%2Fcoursera.jpg?alt=media&token=6d691d4b-71ee-4f09-97e0-93c7444f58b1',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/new%2Fdownload.png?alt=media&token=58a9029d-6ea3-4e4c-a711-1f553a3bf7f7',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/new%2Fudacity_logo.jpg?alt=media&token=ac41f5f1-8bbd-4996-8415-0d90f0f3d427',
'https://firebasestorage.googleapis.com/v0/b/simplan-alpha.appspot.com/o/new%2Fedx.png?alt=media&token=45c04e10-93f8-4028-ac19-ebf2f94d31a3']
class CourseItem  extends Component {
  constructor(props){
      super(props);
      //this.state=this;
    }
    renderCurses() {

      var coursesList = this.props.curses.all;


        //console.log('tttttttttttttttttttttttttttttttttttttt',coursesList);
      return coursesList.map((curse) => {
        var i;
        if(curse.website=='udemy'){
          i=1;
        }
        else if (curse.website=='edx') {
          i=3;
        }else if (curse.website=='coursera') {
          i=0;
        }else {
          i=2;
        }

      //  console.log('ffffffffffffffffffffffffff', curse.name);
        return (
          <div className="card--search" key={curse.key}>

              <div className="card__inner">
                  <a className="card--left-col" ng-href={curse.courseUrl} ng-click="track('course-image')" href={curse.courseUrl}>
                      <img className="card__image" ng-src={curse.photoUrl} src={curse.photoUrl}/>
                  </a>

                  <div className="fx fx-dc">
                      <div className="card__head">
                          <a className="card__title" ng-href={curse.courseUrl} ng-click="track('course-title')" href={curse.courseUrl}>
                              <h1 ng-bind-html="::course.title">{curse.name}</h1>
                          </a>
                      </div>
                      <div className="card__content">
                          <div className="card--middle-col">
                              <p className="card__instructor">
                                  <a ng-href="/react-redux-tutorial/#instructor" ng-click="track('instructor-name')" ng-if="!course.subscribed_course" className="card__instructor-inner" href="/react-redux-tutorial/#instructor">
                                      <span ng-if="!course.instructor_name" ng-bind-html="::course.visible_instructors[0].title"> {curse.teacher}</span>
                                      <span ng-show="course.visible_instructors[0].job_title" className=""> {curse.university} </span>
                                  </a>
                              </p>
                              <p className="card__subtitle" ng-bind-html="::course.headline" style={{minWidth:612}}>{curse.description}
                              </p>
                              <div className="card__metadata">
                                  <span className="card__meta-item">
                                      <span className="udi udi-play-circle card_icon"></span>  </span> <span className="cardmeta-item"> <span className="udi udi-clock cardicon"></span> {`${curse.duration}`} </span> <span className="cardmeta-item"> <span className="udi udi-search-filter card_icon"></span> {curse.level} </span>
                              </div>
                          </div>
                          <div className="card--right-col">
                              <div className="card__price-wrapper">
                              <span ng-if="course.discount_price"> <span className="card_price"> price:  </span> <span className="card_price--old"> {`${curse.price}`} </span> </span>
                              </div>
                              <div className="card__star">
                                  <a ng-href="/react-redux-tutorial/#reviews" ng-click="track('reviews')" href="/react-redux-tutorial/#reviews">
                                      <div className="star-rating--static star-rating--smaller">
                                      </div>
                                      <span className="rev-point"> {curse.ratingGrade} </span>
                                  </a>
                                  <a ng-href="/react-redux-tutorial/#reviews" ng-click="track('num-of-ratings')" href="/react-redux-tutorial/#reviews">
                                      <div className="rev-count" translate="">
                                          <span>{`(${curse.numOfRating } ratings)`}</span>

                                      </div>
                                  </a>
                              </div>
                          </div>
                      </div>
                        {/* <img  src={icons[i]} style={{width:50,height:50, right:0,top:0}}/> */}
                  </div>

              </div>
            <img  src={icons[i]} style={{width:50,height:50, right:0 ,top:0, position:'absolute'}}/>
          </div>

        )
      })
      }

  render() {
        console.log('******',this);
        const { curses, sort } = this.props;
        if (!curses) {
        return <div>Loading...</div>;
        }
        console.log('******',this);
        return (
            <div>
            {this.renderCurses()}
            </div>

            )}
    }
 /* <Card>
////    <View style={{flex: 1, flexDirection: 'row'}}>
//
//        <img src='https://udemy-images.udemy.com/course/304x171/705264_caa9_3.jpg'/>
//        <CardHeader
//          title="URL Avatar"
//          subtitle="Subtitle"
//    //      avatar="images/jsa-128.jpg"
//        />
//        <CardTitle title={cardInfo.title} subtitle={cardInfo.subtitle} />
//        <CardText>
//          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//        </CardText>
//        <CardActions>
//          <FlatButton label="Action1" />
//          <FlatButton label="Action2" />
//        </CardActions>
////    </View>
//  </Card> */

// function mapStateToProps(state) {
//   return {curses: state.curses};
// }
// export default connect(mapStateToProps,{searchCurses})(CourseItem);

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ searchCurses }, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(CourseItem);
function mapStateToProps({ curses }) {
  return {curses };
}

export default connect(mapStateToProps)(CourseItem);
