import * as turf from '@turf/turf'
import lineIntersect from '@turf/line-intersect'
import intersects from '@turf/intersect'
import env from dotenv 

let line1 = turf.lineString([[126, -11], [129, -21]]); // can be a linestring or polygon
let line2 = turf.lineString([[123, -18], [131, -14]]);
let intersects = turf.lineIntersect(line1, line2); // returns a feature collection of intersecting points this will be a boolean for me

let stuff = curl -X GET "https://www.strava.com/api/v3/activities/3472159994" -H "accept: application/json" -H `authorization: Bearer ${STRAVA_KEY.env}`
stuff.polyline = "udknGdmz}LGu@c@EsBJmA@oAHe@Ae@@gA?c@D_@Ai@Dg@?oALoA@g@JQX?PBx@LnABzAHp@FNd@Hb@AtC]|BM~KK`@MBw@EeGMyEGWCCc@?cCJqA@gAHkBDmAAi@DcA?ECUi@Cu@C{ByAWkAIO_@Ew@Ka@ODO[CA_@TaAv@_@T_A|@[\\"