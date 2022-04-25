import React from 'react';
import SkillCard from '../skillLevelCard';

export function WordpressSkills() {

    return (
        <>
            <SkillCard
                shortName="WordPress"
                fullName="WordPress.org"
                link="https://wordpress.org/"
                level={8}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
                description="A content management system that powers 43% of the web."  
            />
            <SkillCard
                shortName="Frontity"
                link="https://frontity.org/"
                level={9}
                icon="https://frontity.org/wp-content/uploads/2020/04/FrontityBlueLogo.svg"
                description="A framework for building a Wordpress site with React."  
            />
            <SkillCard
                shortName="PHP"
                fullName="Hypertext Preprocessor"
                link="https://www.php.net/"
                level={7}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
                description="A general-purpose scripting language that also powers WordPress." 
            />
        </>
    )
};