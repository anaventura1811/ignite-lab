import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Lesson } from '../lesson'

type Props = {}

const GET_LESSONS_QUERY = gql`
  query getLessons {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      title
      lessonType 
      slug 
      id
      availableAt
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: 'live' | 'class'
  }[]
}

export function Sidebar({}: Props) {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Cronograma de aulas
      </span>
      <div className='flex flex-col gap-8'>
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              type={lesson.lessonType}
              availableAt={new Date(lesson.availableAt)}
            />
          )
        })}
        
      </div>
    </aside>
  )
}
