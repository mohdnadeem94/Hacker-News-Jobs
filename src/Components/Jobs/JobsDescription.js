import React,{useEffect,useState}  from 'react'
import axios from 'axios'
import './JobsDescription.css'

function JobsDescription({jobID}) {
    const [postedby,setPostedby]=useState('')
    const [jobsDescriptionText,setJobsDescriptionText] = useState('')
    const [postTime,setPostTime] = useState(0)

    useEffect(() => {
        var hackerNewsJobsUrl = `https://hacker-news.firebaseio.com/v0/item/${jobID}.json?print=pretty`
        async function fetchJobsDescription(){
            const response = await axios.get(hackerNewsJobsUrl)
            setPostedby(response.data.by)
            setJobsDescriptionText(response.data.text)
            setPostTime(response.data.time)
        }
        fetchJobsDescription()
    }, [jobID])

    return (
        <div className='jobsDescription'>
            {postedby?<h3>Posted By : {postedby}</h3>:'Loading... '}
            {jobsDescriptionText?<div dangerouslySetInnerHTML={{ __html: jobsDescriptionText}} />:'No Description'}
            {postTime?<h4>Date : {new Date(postTime*1000).toLocaleDateString("en-US")} {new Date(postTime*1000).toLocaleTimeString("en-US")}</h4>:''}
        </div>
    )
}
export default JobsDescription
