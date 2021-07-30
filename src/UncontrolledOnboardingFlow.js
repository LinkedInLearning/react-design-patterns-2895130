import React, { useState } from 'react';

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
	const [onboardingData, setOnboardingData] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToNext = stepData => {
		const nextIndex = currentIndex + 1;

		const updatedData = {
			...onboardingData,
			...stepData,
		};

		console.log(updatedData);

		if (nextIndex < children.length) {
			setCurrentIndex(nextIndex);
		} else {
			onFinish(updatedData);
		}

		setOnboardingData(updatedData);
	}

	const currentChild = React.Children.toArray(children)[currentIndex];

	if (React.isValidElement(currentChild)) {
		return React.cloneElement(currentChild, { goToNext });
	}

	return currentChild;
}