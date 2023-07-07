import React from "react";

// import {
//   getIcons,
//   getStepProgressStyles,
//   getContainerStyles,
// } from "./Stepper.styles";
// import HeroButton, { HeroButtonProps } from "../Button/HeroButton";

interface StepObject {
  step: string;
  description: string;
  id: number;
  __component: string;
}

interface StepList {
  /**
   * Each step consist of the name of the step and icon for that step, you can check icon and their names in the icon show case tab. Be sure to type the name of the icon in lower case with hyphen.
   */
  steps: StepObject[];
  /**
   *This is the title of the component that is center styled
   */
  title?: string;
  /**
   *Small colored text above title
   */
  eyebrow?: string;
  /**
   *Description text of the whole component
   */
  description?: string;
  /**
   *Image link
   */
  image: any;
  /**
   *Button with label, url, variant..
   */
  // button?: HeroButtonProps;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Stepper: React.FC<StepList> = ({
  steps,
  title,
  eyebrow,
  description,
  image,
  // button,
}) => {
  return (
    <div className="relative bg-white">
      {image && (
        <img
          className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
          src={image}
          alt="Image didn't load"
        />
      )}

      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            {/* eyebrow */}
            {eyebrow && (
              <h2 className="text-base font-semibold leading-8 text-indigo-600">
                {eyebrow}
              </h2>
            )}

            {/* title */}
            {title && (
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </p>
            )}

            {/* desc */}
            {description && (
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {description}
              </p>
            )}
            <div className="mt-20 mb-20">
              <nav aria-label="Progress">
                <ol role="list" className="overflow-hidden">
                  {steps?.map((step, stepIdx) => (
                    <li
                      key={stepIdx}
                      className={classNames(
                        stepIdx !== steps.length - 1 ? "pb-10" : "",
                        "relative"
                      )}
                    >
                      <>
                        {stepIdx !== steps.length - 1 && (
                          <div
                            className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                            aria-hidden="true"
                          />
                        )}
                        <a
                          // href={step.href}
                          className="group relative flex items-start"
                          aria-current="step"
                        >
                          <span
                            className="flex h-9 items-center"
                            aria-hidden="true"
                          >
                            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                              <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                            </span>
                          </span>
                          <span className="ml-4 flex min-w-0 flex-col">
                            <span className="text-sm font-medium text-indigo-600">
                              {step.step}
                            </span>
                            <span className="text-sm text-gray-500">
                              {step.description}
                            </span>
                          </span>
                        </a>
                      </>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
            {/* {button && (
              <HeroButton
                className="pl-4 pr-4 pt-2 pb-2"
                bgColor="blue600"
                label={button.label}
                url={button.url}
                variant={button.variant}
              />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
