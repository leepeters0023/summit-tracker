import * as turf from '@turf/turf'
//import env from dotenv 
import encoded from polyline-encoded

// rewrite this get request to
//let stuff = curl -X GET "https://www.strava.com/api/v3/activities/3472159994" -H "accept: application/json" -H `authorization: Bearer ${STRAVA_KEY.env}`
//stuff.polyline = "udknGdmz}LGu@c@EsBJmA@oAHe@Ae@@gA?c@D_@Ai@Dg@?oALoA@g@JQX?PBx@LnABzAHp@FNd@Hb@AtC]|BM~KK`@MBw@EeGMyEGWCCc@?cCJqA@gAHkBDmAAi@DcA?ECUi@Cu@C{ByAWkAIO_@Ew@Ka@ODO[CA_@TaAv@_@T_A|@[\\"  // strava returns this in Google encoded polyline algorithm format.
//let encoded = fromEncoded(resObj.polyline)

let encoded = "udknGdmz}LGu@c@EsBJmA@oAHe@Ae@@gA?c@D_@Ai@Dg@?oALoA@g@JQX?PBx@LnABzAHp@FNd@Hb@AtC]|BM~KK`@MBw@EeGMyEGWCCc@?cCJqA@gAHkBDmAAi@DcA?ECUi@Cu@C{ByAWkAIO_@Ew@Ka@ODO[CA_@TaAv@_@T_A|@["
let line1 = L.polyline.fromEncoded(encoded).getLatLngs();
console.log(line1)
//line1 = turf.lineString(line1)
let line2 = turf.lineString([[44.465332, -73.214800],[44.4653014,-73.2153133],[44.4650257,-73.2151658],[44.4648946,-73.2148868]])

let intersects = turf.lineIntersect(line1, line2); // returns a feature collection of intersecting points this will be a boolean for me

if (intersects) {
  console.log('true')
}