import React,{useEffect,useState} from 'react'
import axios from 'axios'
import JobsDescription from './JobsDescription'
import './Jobs.css'

function Jobs() {
    const hackerNewsJobsUrl = `https://hacker-news.firebaseio.com/v0/item/25989764.json?print=pretty`

    const [jobPost,setJobPost] = useState([])

    useEffect(()=>{
        async function fetchJobs(){
            const response = await axios.get(hackerNewsJobsUrl)
            var response_sort = response.data.kids
            response_sort = response_sort.sort()
            setJobPost(response_sort.reverse())
            // console.log(response_sort.reverse())
        }
        fetchJobs()
    },[hackerNewsJobsUrl])

    return (
        <div className='jobs'>
            <h4 className='jobs_total_count'>Total Jobs : {jobPost.length}</h4>
            {
                jobPost.map((jobID)=>{
                    return (
                        <div key = {jobID} className="jobs_Id">
                            <JobsDescription jobID={jobID}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Jobs
