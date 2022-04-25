import React from 'react';
import SkillCard from '../skillLevelCard';

export function GraphicDesignSkills() {

    return (
        <>
            <SkillCard
                shortName="Figma"
                link="https://www.figma.com/"
                level={7}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
                description="A graphic design app." 
            />
            <SkillCard
                shortName="GIMP"
                fullName="GNU Image Manipulation Program"
                link="https://www.gimp.org/"
                level={6}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" 
                description="An image editor program, similar to Photoshop." 
            />
            <SkillCard
                shortName="Photoshop"
                fullName="Adobe Photoshop"
                link="https://www.adobe.com/uk/products/photoshop.html"
                level={4}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" 
                description="An image editor program." 
            />
            <SkillCard
                shortName="Inkscape"
                link="https://inkscape.org/"
                level={6}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-original.svg" 
                description="A vector graphics program, similar to Illustrator." 
            />
            <SkillCard
                shortName="Illustrator"
                fullName="Adobe Illustrator"
                link="https://www.adobe.com/uk/products/illustrator.html"
                level={6}
                icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" 
                description="A vector graphics program." 
            />
        </>
    )
};