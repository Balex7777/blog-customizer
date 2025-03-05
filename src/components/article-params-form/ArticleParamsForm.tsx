import { ArrowButton } from '../../components/arrow-button';
import { Button } from '../../components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { Select } from '../select';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
} from '../../../src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { Spacing } from '../spacing';

export const ArticleParamsForm = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<ArrowButton open={open} setOpen={setOpen} />
			<aside className={clsx(styles.container, open && styles.container_open)}>
				<form className={styles.form}>
					<Select
						title='Шрифт'
						selected={fontFamilyOptions[0]}
						options={fontFamilyOptions}
					/>
					<Spacing size={50} />
					<RadioGroup
						name='fontSize'
						options={fontSizeOptions}
						selected={fontSizeOptions[0]}
						title='Размер шрифта'
					/>
					<Spacing size={50} />
					<Select
						title='Цвет шрифта'
						selected={fontColors[0]}
						options={fontColors}
					/>
					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />
					<Select
						title='Цвет фона'
						selected={backgroundColors[0]}
						options={backgroundColors}
					/>
					<Spacing size={50} />
					<Select
						title='Ширина контента'
						selected={contentWidthArr[0]}
						options={contentWidthArr}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
