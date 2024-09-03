import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

export const ArticleParamsForm = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);

	const toggleForm = () => setIsFormOpen(!isFormOpen);

	return (
		<>
			<ArrowButton onClick={toggleForm} isOpen={isFormOpen} />
			<aside
				className={clsx(styles.container, isFormOpen && styles.container_open)}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
